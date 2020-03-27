import React from 'react'
import { createStyles, makeStyles, Theme, lighten } from '@material-ui/core/styles'
import {
  TableCell,
  TableHead,
  TableSortLabel,
  Toolbar,
  Tooltip,
  IconButton,
  Typography,
  TableRow,
  Checkbox
} from '@material-ui/core'
import clsx from 'clsx'
import DeleteIcon from '@material-ui/icons/Delete'
import FilterListIcon from '@material-ui/icons/FilterList'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

//dummy data set
export interface Data {
  calories: number
  carbs: number
  fat: number
  name: string
  protein: number
}

function createData(name: string, calories: number, fat: number, carbs: number, protein: number): Data {
  return { name, calories, fat, carbs, protein }
}

export const rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0),
]

function desc<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}
interface HeadCell {
  disablePadding: boolean
  id: keyof Data
  label: string
  numeric: boolean
}
const headCells: HeadCell[] = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
  { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
  { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
]

//For Table Toolbar

const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: '1 1 100%',
    },
  })
)

interface EnhancedTableToolbarProps {
  numSelected: number
}
export const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const classes = useToolbarStyles()
  const { numSelected } = props

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle">
         Table with sorting and selection
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  )
}
//For table Toolbar

export function stableSort<T>(array: T[], cmp: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map(el => el[0])
}

export type Order = 'asc' | 'desc'

export function getSorting<K extends keyof any>(
  order: Order,
  orderBy: K
): (a: { [key in K]: number | string }, b: { [key in K]: number | string }) => number {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy)
}

//For Table header
export interface EnhancedTableProps {
  classes: ReturnType<typeof useStyles>
  numSelected: number
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
  order: Order
  orderBy: string
  rowCount: number
}
export function EnhancedTableHead(props: EnhancedTableProps) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props
  const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property)
  }
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel active={orderBy === headCell.id} direction={order} onClick={createSortHandler(headCell.id)}>
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
//For Table header
