export const add = (value) => ({type: 'ADD', value});
export const del = (id) => ({type: 'DEL', id});
export const edit = (id) => ({type: 'EDIT', id});
export const handleChange = (id, value) => ({type: 'UPDATE', id, value});
export const handleKeyup = (id, code) => ({type: 'KEYUP', id, code});
export const handleChecked = (id) => ({type: 'CHECKED', id});
export const handleBtn = (display) => ({type: 'READ', display});