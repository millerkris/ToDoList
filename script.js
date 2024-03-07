


// Создайте кнопку "Закрыть" и добавьте ее к каждому элементу списка
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
 var txt = document.createTextNode("\u00D7");
  span.className = "close";
 span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Нажмите на кнопку "Закрыть", чтобы скрыть текущий элемент списка
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var li = this.parentElement;
    li.parentNode.removeChild(li);
    checkEmpty();
  };
}

// Добавить "checked" символ при нажатии на элемент списка
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
 }
}, false);



function checkEmpty() {
var listul = document.getElementById('myUL');
var emptyMessage = document.getElementById('empty-message');
    if (listul.children.length === 0) {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
    }
}

checkEmpty();



function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Вы должны что-то написать!");
  } else {
    document.getElementById("myUL").appendChild(li).classList.add('list-item');
    checkEmpty();
  }
  document.getElementById("myInput").value = "";
   const spanDate = document.createElement('span');
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    spanDate.textContent = `${day}.${month}.${year}`;
spanDate.classList.add('date');
var br = document.createElement('br');
li.appendChild(br);
li.appendChild(spanDate);

  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      checkEmpty();
    };
  }
}



// Отслеживаем событие нажатия 
document.getElementById("create").onclick = function() {
    newElement(); // Вызываем функцию для добавления новой задачи
    checkEmpty();
  };

document.getElementById('deleteListItems').addEventListener('click', function() {
    const li = document.getElementById('myUL');
    while (li.firstChild) {
        li.removeChild(li.firstChild);
	checkEmpty();
    }
});



const filterDone = document.getElementById('filterDone');
const filterNotDone = document.getElementById('filterNotDone');
const filterAll = document.getElementById('filterAll');
const sortByName = document.getElementById('sortByName');

filterDone.addEventListener('click', function() {
  var items = document.querySelectorAll('li');
  items.forEach(function(item) {
    if (item.classList.contains('checked')) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});


filterNotDone.addEventListener('click', function() {
  var items = document.querySelectorAll('li');
  items.forEach(function(item) {
    if (!item.classList.contains('checked')) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

filterAll.addEventListener('click', function() {
  var items = document.querySelectorAll('li');
  items.forEach(function(item) {
    item.style.display = 'block';
  });
});


var isReverseSortByName = false;

function sortItemsByName(reverse) {
  var items = document.querySelectorAll('li');
  var itemsArray = Array.from(items);

  itemsArray.sort(function(a, b) {
    var nameA = a.textContent.toLowerCase();
    var nameB = b.textContent.toLowerCase();
    return reverse ? nameB.localeCompare(nameA) : nameA.localeCompare(nameB);
  });

  var list = document.querySelector('ul');
  list.innerHTML = '';

  itemsArray.forEach(function(item) {
    list.appendChild(item);
  });
}

// Добавляем обработчик события для кнопки сортировки
sortByName.addEventListener('click', function() {
  sortItemsByName(isReverseSortByName);
  isReverseSortByName = !isReverseSortByName;
});
  



function sortItemsByDate(reverse) {
const itemsArray = Array.from(document.querySelectorAll('li'));
  itemsArray.sort((a, b) => {
      const date1 = new Date(a.querySelector('.date').innerText);
      const date2 = new Date(b.querySelector('.date').innerText);

      if (!reverse) {
          return date1 - date2;
      } else {
          return date2 - date1;
      }
  });

  const itemsList = document.querySelector('ul');
  itemsList.innerHTML = '';

  itemsArray.forEach(item => {
      itemsList.appendChild(item);
  });
}

let ascending = true;
document.getElementById('sortByDate').addEventListener('click', () => {
    sortItemsByDate(ascending);
    ascending = !ascending;
});    