import addEmoji from './add_emoji.js';
export default (ingredient)=> `<option value="${ingredient}">${addEmoji(ingredient)}</option>`;


