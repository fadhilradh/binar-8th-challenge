const Dashboard = () => {
  return (
    <>
      <header id="header">
        <nav>
          <div className="max-w-screen-lg mx-auto flex items-center">
            <a href="/" className="base-button w-auto">
              Back
            </a>
            <div className="text-center flex-1">
              <a href="/dashboard" className="nav-brand text-dark">
                Game Dashboard
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="mt-10">
        <div className="container">
          <div className="my-6 flex justify-between">
            <a href="/add-user">
              <span className="base-button ">
                Add New User <i className="fas fa-user"></i>
              </span>
            </a>
          </div>

          <form action="/dashboard" method="POST">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </form>
        </div>
      </main>
    </>
  )
}

export default Dashboard
