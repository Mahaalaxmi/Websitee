function Hello() {
  console.log("Hello");
}
Hello();

const hi = () => {
  console.log("Hi");
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
};

const Bye = () => console.log("Bye");
hi();
Bye();
