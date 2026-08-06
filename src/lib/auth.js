export const DEFAULT_AVATAR = "/users/user24px.svg";

const USERS_KEY = "users";

function migrateLegacyUser() {
  const legacy = localStorage.getItem("user");
  if (!legacy) return;

  try {
    const oldUser = JSON.parse(legacy);
    const users = getUsers();
    const exists = users.some(
      (u) => u.username === oldUser.username || u.email === oldUser.email
    );

    if (!exists && oldUser.username && oldUser.email) {
      users.push({
        username: oldUser.username,
        email: oldUser.email,
        password: oldUser.password,
        avatar: oldUser.avatar || DEFAULT_AVATAR,
      });
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
    }
  } catch {

  }

  localStorage.removeItem("user");
}

export function getUsers() {
  if (typeof window === "undefined") return [];
  migrateLegacyUser();
  const data = localStorage.getItem(USERS_KEY);
  return data ? JSON.parse(data) : [];
}

export function registerUser({ username, email, password, avatar }) {
  const users = getUsers();

  if (users.some((u) => u.username.toLowerCase() === username.toLowerCase())) {
    return { success: false, error: "This username is already taken" };
  }

  if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
    return { success: false, error: "This email is already registered" };
  }

  const user = {
    username,
    email,
    password,
    avatar: avatar || DEFAULT_AVATAR,
    plan,
  };

  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  setSession(user);

  return { success: true, user };
}

export function loginUser({ username, email, password }) {
  const users = getUsers();
  const user = users.find(
    (u) =>
      u.username === username &&
      u.email === email &&
      u.password === password &&
      u.plan === plan
  );

  if (!user) {
    return { success: false, error: "Incorrect username, email, or password" };
  }

  setSession(user);
  return { success: true, user };
}

export function setSession(user) {
  localStorage.setItem("isAuth", "true");
  localStorage.setItem("currentUser", user.username);
  localStorage.setItem("currentAvatar", user.avatar || DEFAULT_AVATAR);
  localStorage.getItem("plan") || ""
}

export function logout() {
  localStorage.removeItem("isAuth");
  localStorage.removeItem("currentUser");
  localStorage.removeItem("currentAvatar");
}

export function getSession() {
  if (typeof window === "undefined") {
    return { isAuth: false, username: "", avatar: DEFAULT_AVATAR };
  }

  return {
    isAuth: localStorage.getItem("isAuth") === "true",
    username: localStorage.getItem("currentUser") || "",
    avatar: localStorage.getItem("currentAvatar") || DEFAULT_AVATAR,
    plan: localStorage.getItem("plan") || ""
  };
}
