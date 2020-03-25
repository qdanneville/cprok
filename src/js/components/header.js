//header function component
const Header = (props) => `<header>${props ? props.title : 'Default app name'}</header>`

// ---> header function is the same as  
// function header(props) {
//   return `<header>${props ? props.title : 'Default app name'}</header>`
// }

export default Header

