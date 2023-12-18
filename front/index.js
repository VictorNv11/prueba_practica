const React = require('react');

<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />
  <title>Documento</title>
  <div className="container" style={{marginTop: '5%', backgroundColor: 'aliceblue'}}>
    <form className="row g-3">
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">Nombre</label>
        <input type="text" className="form-control" id="name" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPassword4" className="form-label">Apellidos</label>
        <input type="text" className="form-control" id="lastName" />
      </div>
      <div className="col-md-2">
        <label htmlFor="inputZip" className="form-label">Identificación</label>
        <input type="number" className="form-control" id="Id" />
      </div>
      <div className="col-md-4">
        <label htmlFor="inputState" className="form-label">Fecha Nacimiento</label>
        <input type="date" className="form-control" id="inputCity" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">Ciudad</label>
        <select className="form-select" aria-label="Default select example">
          <option value={1}>...</option>
          <option value={2}>Bogotá</option>
          <option value={3}>Medellín</option>
          <option value={4}>Barranquilla</option>
          <option value={5}>Bucaramanga</option>
        </select>
      </div>
      <div className="col-12">
        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
        <input type="email" className="form-control" id="Email1" aria-describedby="emailHelp" />
      </div>         
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">Telefono</label>
        <input type="tel" className="form-control" id="phone" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPassword4" className="form-label">Ocupación</label>
        <input type="text" className="form-control" id="ocupation" />
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">Enviar</button>
      </div>
    </form>
  </div>
</div>


