var del = document.getElementsByClassName('delete');
del.addEventListner('mouseover', delet);
function delet(){
      document.getElementsByClassName('main').style.background = 'red';
}