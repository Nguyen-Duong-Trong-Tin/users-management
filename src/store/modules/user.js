const state = () => {
  return {
    users: [
      {
        id: 1,
        name: "Nguyễn Phong Hào",
        avatar: "hinh",
        age: 23,
        description: "thân thiện , hoc hỏi nhanh",
        programmingLanguage: ["JS", "JAVA"],
        gender: "Nam",
        type: "Admin",
      },
      {
        id: 2,
        name: "Phan Thùy Duyên",
        avatar: "hinh",
        age: 22,
        description: "thân thiện , hoc hỏi nhanh",
        programmingLanguage: ["PHP", "C#"],
        gender: "Nữ",
        type: "Client",
      },
    ],
    searchName: "",
  };
};

const getters = {
  maleUsers(state) {
    return state.users.filter((user) => user.gender === "Nam");
  },
  usersByGender: (state) => (gender) => {
    return state.users.filter((user) => user.gender === gender);
  },
  usersBySearchName: (state) => {
    return state.users.filter((user) =>
      user.name.toLowerCase().includes(state.searchName.toLowerCase()),
    );
  },
};

const mutations = {
  setSearchName(state, payload) {
    state.searchName = payload;
  },
  addUser(state, payload) {
    state.users.push(payload);
  },
  removeUser(state, payload) {
    state.users = state.users.filter((user) => user.id !== payload);
  },
  updateUser(state, payload) {
    const index = state.users.findIndex((user) => user.id === payload.id);
    if (index !== -1) {
      state.users[index] = { ...state.users[index], ...payload };
    }
  },
};

const actions = {
  searchUsersByName(context, payload) {
    setTimeout(() => {
      context.commit("setSearchName", payload);
    }, 1000);
  },
  addUser(context, payload) {
    const user = {
      id: Date.now(),
      name: payload.userName,
      // avatar: payload.avatar,
      avatar: "hinh",
      age: payload.age,
      description: payload.description,
      programmingLanguage: payload.programmingLanguages,
    };
    context.commit("addUser", user);
  },
  removeUser(context, payload) {
    context.commit("removeUser", payload);
  },
  updateUser(context, payload) {
    const user = {
      id: payload.id,
      name: payload.userName,
      // avatar: payload.avatar,
      avatar: "hinh",
      age: payload.age,
      description: payload.description,
      programmingLanguage: payload.programmingLanguages,
    };

    context.commit("updateUser", user);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
