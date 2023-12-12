
// FILL THIS OUT
const  {Item} = require('./item')

//const Item = I.Item;


class Food extends Item{

  constructor(name, description)
  {
    super(name,description);
  }


}

module.exports = {
  Food,
};
