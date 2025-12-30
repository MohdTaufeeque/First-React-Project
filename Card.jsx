function Card() {

  const user1 = {
    details: {
      name: "MOHAMMAD TAUFEEQUE",
      age: 20,
      id: 1
    },
    address: {
      city: "Mumbai",
      zipcode: 441001,
      state: "Maharashtra",
      country: "India"
    },
    contact: {
      email: "mohammadtaufeeque902@gamil.com",
      phone: 8788215950
    }
  };

  const user2 = {
    details: {
      name: "ABBAS HAIDER",
      age: 38,
      id: 2
    },
    address: {
      city: "Pune",
      zipcode: 411001,
      state: "Maharashtra",
      country: "India"
    },
    contact: {
      email: "abbashaider52579@gmail.com",
      phone: 9326733646
    }
  };

  return (
    <div className="Card">

      <div className="c1">
        <h2>User 1</h2>
        <p>Name: {user1.details.name}</p>
        <p>Age: {user1.details.age}</p>
        <p>City: {user1.address.city}</p>
        <p>Email: {user1.contact.email}</p>
      </div>

      <div className="c2">
        <h2>User 2</h2>
        <p>Name: {user2.details.name}</p>
        <p>Age: {user2.details.age}</p>
        <p>City: {user2.address.city}</p>
        <p>Email: {user2.contact.email}</p>
      </div>

    </div>
  );
}

export default Card;