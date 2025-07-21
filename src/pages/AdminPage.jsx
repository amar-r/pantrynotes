import { useState } from 'react';

const ADMIN_PASSWORD = 'I am the chef.';

const AdminPage = () => {
  const [input, setInput] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password.');
    }
  };

  if (!authenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <form onSubmit={handleSubmit} className="section max-w-sm w-full space-y-6">
          <h2 className="text-2xl font-bold text-center mb-2">Admin Login</h2>
          <label htmlFor="admin-password" className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
            Enter admin password:
          </label>
          <input
            id="admin-password"
            type="password"
            className="input"
            value={input}
            onChange={e => setInput(e.target.value)}
            autoComplete="current-password"
            required
            aria-label="Admin password"
          />
          {error && <div className="text-red-600 text-sm text-center">{error}</div>}
          <button type="submit" className="btn-primary w-full">Login</button>
        </form>
      </div>
    );
  }

  // Placeholder for admin dashboard
  return (
    <div className="container py-12">
      <div className="section max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
        <p className="text-muted mb-4">You are authenticated as the chef. Recipe management coming soon.</p>
        {/* TODO: Add CRUD and export/import UI here */}
      </div>
    </div>
  );
};

export default AdminPage; 