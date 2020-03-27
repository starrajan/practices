import React, { useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { globaltheme } from '../../shared/styles/theme'
import { ThemeProvider } from '@material-ui/core/styles'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  Container,
  TableRow,
  TextField,
  Button,
  Card,
  CardContent,
  Paper,
  Radio,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core'

import {
  EnhancedTableToolbar,
  EnhancedTableHead,
  EnhancedTableProps,
  Data,
  stableSort,
  getSorting,
  rows,
  Order,
} from '../../shared/tables/SortTable'

import { Formik, Form, Field, ErrorMessage, FieldAttributes, useField } from 'formik'
import * as Yup from 'yup'
import DateFnsUtils from '@date-io/date-fns' // choose your lib
import { DatePicker, TimePicker, DateTimePicker, MuiPickersUtilsProvider, InlineDatePicker } from 'material-ui-pickers'

type MyRadioProps = { label: string } & FieldAttributes<{}>
const MyRadio: React.FC<MyRadioProps> = ({ label, ...props }) => {
  const [field] = useField<{}>(props)
  return <FormControlLabel {...field} control={<Radio />} label={label} />
}

type MyCheckboxProps = { label: string } & FieldAttributes<{}>
const MyCheckbox: React.FC<MyCheckboxProps> = ({ label, ...props }) => {
  const [field] = useField<{}>(props)
  return <FormControlLabel {...field} control={<Checkbox />} label={label} />
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    dummywrapper: {
      marginTop: theme.spacing(12),
    },
    title: {
      fontSize: 18,
    },
    customcard: {
      margin: theme.spacing(2, 0),
    },
    form: {
      marginTop: theme.spacing(1),
      width: '100%', // Fix IE 11 issue.
    },
    invalid: {
      color: 'red',
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    space: {
      margin: theme.spacing(4, 0, 2),
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
    table: {
      minWidth: 750,
    },
  })
)

function DummyComponents(props: EnhancedTableProps) {
  const [order, setOrder] = React.useState<Order>('asc')
  const [orderBy, setOrderBy] = React.useState<keyof Data>('calories')
  const [selected, setSelected] = React.useState<string[]>([])
  const [page, setPage] = React.useState(0)
  const [dense] = React.useState(false)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  // function call for the table functionality
  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isDesc = orderBy === property && order === 'desc'
    setOrder(isDesc ? 'asc' : 'desc')
    setOrderBy(property)
  }
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }
  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected: string[] = []
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
    }
    setSelected(newSelected)
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const isSelected = (name: string) => selected.indexOf(name) !== -1
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)
  // function call for the table functionality

  const [selectedDate, handleDateChange] = useState(new Date())
  const classes = useStyles()

  //setting up validation scheme using yup
  const PostSchema = Yup.object().shape({
    name: Yup.string().required('title is required'),
    email: Yup.string()
      .email('Invalid email address format')
      .required('Email is required'),
    password: Yup.string()
      .min(3, 'Password must be 3 characters at minimum')
      .required('Password is required'),
  })
  //setting up validation scheme using yup

  return (
    <div className={classes.dummywrapper}>
      <Container maxWidth="xs">
        <Card>
          <CardContent>
            <h5>Basic Form elements</h5>

            <Formik
              initialValues={{
                name: '',
                email: '',
                password: '',
                gender: '',
                skills: [],
              }}
              validationSchema={PostSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                }, 400)
              }}
            >
              {({ isSubmitting }) => (
                <Form className={classes.form} noValidate>
                  <div className="form-group">
                    <Field type="text" name="name" label="Name" variant="outlined" fullWidth margin="normal" as={TextField} />
                    <ErrorMessage component="div" name="name" className={classes.invalid} />
                  </div>
                  <div className="form-group">
                    <Field type="email" name="email" label="Email" variant="outlined" fullWidth margin="normal" as={TextField} />
                    <ErrorMessage component="div" name="email" className={classes.invalid} />
                  </div>
                  <div className="form-group">
                    <Field type="password" name="password" label="Password" fullWidth margin="normal" variant="outlined" as={TextField} />
                    <ErrorMessage component="div" name="password" className={classes.invalid} />
                  </div>

                  <div>
                    <MyRadio name="gender" type="radio" value="male" label="Male" />
                    <MyRadio name="gender" type="radio" value="female" label="Female" />
                  </div>

                  <div>
                    <MyCheckbox name="skills" type="checkbox" value="Angular" label="Angular" />
                    <MyCheckbox name="skills" type="checkbox" value="React" label="React" />
                    <MyCheckbox name="skills" type="checkbox" value="Node" label="Node js" />
                  </div>

                  <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <div className={classes.space}>
                        <DatePicker value={selectedDate} onChange={handleDateChange} />
                      </div>
                      <div className={classes.space}>
                        <TimePicker value={selectedDate} onChange={handleDateChange} />
                      </div>
                      <div className={classes.space}>
                        <DateTimePicker value={selectedDate} onChange={handleDateChange} />
                      </div>

                      <div className={classes.space}>
                        <InlineDatePicker
                          keyboard
                          clearable
                          variant="outlined"
                          label="Birth date"
                          value={selectedDate}
                          format="dd/mm/yyyy"
                          onChange={handleDateChange}
                          mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                        />
                      </div>
                    </MuiPickersUtilsProvider>
                  </div>

                  <Button type="submit" fullWidth variant="contained" color="primary" disabled={isSubmitting} className={classes.submit}>
                    {isSubmitting ? 'Please wait...' : 'Submit'}
                  </Button>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Container>

      <div className={classes.space}>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <EnhancedTableToolbar numSelected={selected.length} />
            <TableContainer>
              <Table className={classes.table} aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'} aria-label="enhanced table">
                <EnhancedTableHead
                  classes={classes}
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                <TableBody>
                  {stableSort(rows, getSorting(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(row.name)
                      const labelId = `enhanced-table-checkbox-${index}`

                      return (
                        <TableRow
                          hover
                          onClick={event => handleClick(event, row.name)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.name}
                          selected={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                          </TableCell>
                          <TableCell component="th" id={labelId} scope="row" padding="none">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.calories}</TableCell>
                          <TableCell align="right">{row.fat}</TableCell>
                          <TableCell align="right">{row.carbs}</TableCell>
                          <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                      )
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>

          <div>
            <h4>Global customization component example</h4>
            <ThemeProvider theme={globaltheme}>
              <Button>font-size: 1rem</Button>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DummyComponents
