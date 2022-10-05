## Details

  This Repo use multiple instance to connect to database and use connection string api to force priority of connection .

  - primary instance - use readpreference `primary` for read and write operation to master
  - secondary instance - use readpreference `secondary` for read only to slave instance

  - When have write operation to master, master will try to write data to slave when write successfull for majority of slave master will return acknowledged succesfull write to client.

  <img src="https://www.mongodb.com/docs/manual/images/crud-write-concern-w-majority.bakedsvg.svg">

  ** connection string use mongo+srv for resolve multiple database hostname (make connection pool)