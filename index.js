let someNumber = 42;
let someString = "Какой-нибудь текст";
let someBoolean = false;

someNumber = someString;
someString = 42;
someBoolean = null;

alert(`someNumber ${someNumber}, someString ${someString}, someBoolean ${someBoolean}`);