export var cart = [];
function findItem(item, element) {
  if (item.id === element.id) {
    return true;
  }
  return false;
}

//Item é o produto
export function addToCart(item) {
  const index = cart.findIndex(element => findItem(item, element));
  //Se ainda não estiver no array
  if (index === -1) {
    cart.push({ ...item, qtd: 1 });
  } else {
    const qtd = cart[index].qtd + 1;
    cart[index] = { ...cart[index], qtd };
  }
}

export function removeFromCart(item) {
  const index = cart.findIndex(element => findItem(item, element));
  //Se o elemento existir
  if (index !== -1) {
    const qtd = cart[index].qtd - 1;
    //Se for o ultimo no carrinho
    if (qtd <= 0) {
      cart.splice(index, 1);
    } else {
      //Senão reduzir a quantidade
      cart[index] = { ...cart[index], qtd };
    }
  }
}
