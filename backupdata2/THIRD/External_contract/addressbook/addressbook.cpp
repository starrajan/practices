#include <eosio/eosio.hpp>
#include "abcounter.cpp"

using namespace eosio;

class [[eosio::contract("addressbook")]] addressbook : public eosio::contract {

public:
  using contract::contract;
  
  addressbook(name receiver, name code,  datastream<const char*> ds): contract(receiver, code, ds) {}

  [[eosio::action]]
  void upsert(name user, std::string first_name, std::string last_name, 
      uint64_t age, std::string street, std::string city, std::string state) {
    require_auth(user);
    address_index addresses(get_first_receiver(), get_first_receiver().value);
    auto iterator = addresses.find(user.value);
    if( iterator == addresses.end() )
    {
      addresses.emplace(user, [&]( auto& row ) {
       row.key = user;
       row.first_name = first_name;
       row.last_name = last_name;
       row.age = age;
       row.street = street;
       row.city = city;
       row.state = state;
      });
      send_summary(user, " successfully emplaced record to addressbook");
      increment_counter(user, "emplace");
    }
    else {
      std::string changes;
      addresses.modify(iterator, user, [&]( auto& row ) {
        row.key = user;
        row.first_name = first_name;
        row.last_name = last_name;
        row.age = age;
        row.street = street;
        row.city = city;
        row.state = state;
      });
      send_summary(user, " successfully modified record to addressbook");
      increment_counter(user, "modify");
    }
  }

  [[eosio::action]]
  void erase(name user) {
    require_auth(user);

    address_index addresses(get_first_receiver(), get_first_receiver().value);

    auto iterator = addresses.find(user.value);
    check(iterator != addresses.end(), "Record does not exist");
    addresses.erase(iterator);
    send_summary(user, " successfully erased record from addressbook");
    increment_counter(user, "erase");
  }

  [[eosio::action]]
  void notify(name user, std::string msg) {
    require_auth(get_self());
    require_recipient(user);
  }

private:
  struct [[eosio::table]] person {
    name key;
    uint64_t age;
    std::string first_name;
    std::string last_name;
    std::string street;
    std::string city;
    std::string state;
  
    uint64_t primary_key() const { return key.value; }
    uint64_t get_secondary_1() const { return age;}
  };

  void send_summary(name user, std::string message) {
    action(
      permission_level{get_self(),"active"_n},
      get_self(),
      "notify"_n,
      std::make_tuple(user, name{user}.to_string() + message)
    ).send();
  };

  void increment_counter(name user, std::string type) {
    abcounter::count_action count("muskansoni12"_n, {get_self(), "active"_n});
    count.send(user, type);
  }
 using upsert_action = action_wrapper<"upsert"_n, &addressbook::upsert>;
  using erase_action = action_wrapper<"erase"_n, &addressbook::erase>;
   using notify_action = action_wrapper<"notify"_n, &addressbook::notify>;
  typedef eosio::multi_index<"people"_n, person, 
    indexed_by<"byage"_n, const_mem_fun<person, uint64_t, &person::get_secondary_1>>
  > address_index;
};