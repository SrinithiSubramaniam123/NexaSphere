const API_BASE = 'http://localhost:5000/api';

// Helper function - backend ku request anuppurathukku
async function request(path, options = {}) {
  const token = localStorage.getItem('nexasphere_token');

  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
}

export const signup = (name, email, password) =>
  request('/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
  });

export const login = (email, password) =>
  request('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

export const getMe = () => request('/auth/me');
