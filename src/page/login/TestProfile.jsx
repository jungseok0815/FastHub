const TestProfile = () => {
    const { user, logout } = useAuth();
  
    if (!user) {
      return <div>Please log in</div>;
    }
  
    return (
      <div>
        <h2>Welcome, {user.userId}!</h2>
        <button onClick={logout}>Logout</button>
      </div>
    );
  };

  export default TestProfile;