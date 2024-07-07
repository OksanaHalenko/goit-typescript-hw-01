type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  const userDefault: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  return { ...userDefault, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
