## Details

  This Repo use multiple instance to connect to database and use connection string api to force priority of connection .

  primary instance - use readpreference `primary` for read and write operation to master
  secondary instance - use readpreference `secondary` for read only to slave instance

  ** connection string use mongo+srv for resolve multiple database hostname (make connection pool)