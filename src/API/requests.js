import axiosBase from "./axios-instance";

function signUp(data) {
    return axiosBase.post('/auth/sign-up', data);
};

function login(data) {
    return axiosBase.post('/auth/login', data);
};

function createNewHabit(data, token) {
    return axiosBase.post('/habits', data, { headers: { 'Authorization': `Bearer ${token}` } });
}

function getAllHabits(token) {
    return axiosBase.get('/habits', { headers: { 'Authorization': `Bearer ${token}` } });
}

function getTodaysHabits(token) {
    return axiosBase.get('/habits/today', { headers: { 'Authorization': `Bearer ${token}` } });
}

function deleteHabit(habitId, token) {
    return axiosBase.delete(`/habits/${habitId}`, { headers: { 'Authorization': `Bearer ${token}` } });
}

function checkHabit(habit, token) {
    return axiosBase.post(`/habits/${habit.id}/check`, { habit }, { headers: { 'Authorization': `Bearer ${token}` } });
}

function uncheckHabit(habit, token) {
    return axiosBase.post(`/habits/${habit.id}/uncheck`, { habit }, { headers: { 'Authorization': `Bearer ${token}` } });
}

function getHabitsHistory(token) {
    return axiosBase.get('/habits/history/daily', { headers: { 'Authorization': `Bearer ${token}` } });
}

export { signUp, login, createNewHabit, getAllHabits, getTodaysHabits, deleteHabit, checkHabit, uncheckHabit, getHabitsHistory };