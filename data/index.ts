// import campusMain from './main.json'
// TODO: add data
import campusTongzhou from './tongzhou.json'

const data: ICampus[] = [
  {
    name: '通州校区',
    types: campusTongzhou
  }
]

export interface ICode {
  id: number,
  name: string
}

export interface ICampus {
  name: string,
  types: {
    name: string,
    codes: ICode[]
  }[]
}

export default data
