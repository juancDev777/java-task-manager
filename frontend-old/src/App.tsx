import { useState, useEffect } from 'react';
import './App.css';
import type { User, CreateUserCommand } from './types.ts';
import { userService } from './userService.ts';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [formData, setFormData] = useState<CreateUserCommand>({ name: '', email: '' });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await userService.getAll();
      setUsers(data);
    } catch (err) {
      showNotification('Failed to load users', 'error');
    }
  };

  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editingId) {
        await userService.update(editingId, { ...formData, id: editingId });
        showNotification('User updated successfully!', 'success');
      } else {
        await userService.create(formData);
        showNotification('User registered successfully!', 'success');
      }
      setFormData({ name: '', email: '' });
      setEditingId(null);
      fetchUsers();
    } catch (err: any) {
      showNotification(err.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (user: User) => {
    setEditingId(user.id);
    setFormData({ name: user.name, email: user.email });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({ name: '', email: '' });
  };

  return (
    <div className="App">
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--primary)' }}>User Manager</h1>
        <p style={{ color: 'var(--text-muted)' }}>DDD + CQRS + Spring Boot + React</p>
      </header>

      <main className="container">
        {/* Registration/Edit Form */}
        <section className="card">
          <h2>{editingId ? 'Edit User' : 'Register User'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                required
              />
            </div>
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Processing...' : editingId ? 'Update User' : 'Register User'}
            </button>
            {editingId && (
              <button type="button" onClick={cancelEdit} className="btn-secondary">
                Cancel
              </button>
            )}
          </form>
        </section>

        {/* User List */}
        <section className="card">
          <h2>User List</h2>
          {users.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>No users found.</p>
          ) : (
            <ul className="user-list">
              {users.map((user) => (
                <li key={user.id} className="user-item">
                  <div className="user-info">
                    <span className="name">{user.name}</span>
                    <span className="email">{user.email}</span>
                  </div>
                  <div className="actions">
                    <button onClick={() => handleEdit(user)} className="btn-edit">
                      Edit
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      {/* Toast Notifications */}
      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
    </div>
  );
}

export default App;
