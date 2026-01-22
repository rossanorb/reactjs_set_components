# Set of ReactJs components

## Requirements

- Mongodb
- Node.Js version 21

## Notes

- Plugin prettier version 10.1.0

## Mongodb running as individual container

```bash
$ sudo docker run -d --name mongodb -p 27017:27017 -v /YOUR_LOCAL_FOLDER_HERE:/data/db mongo:3.6
```

## Running api server.

> In the root folder api run the command below:
>
> > ```bash
> > $ npm run start
> > ```

## Running front-end application.

> In the root folder front run the command below:
>
> > ```bash
> > $ npm run start
> > ```

## The application can be accessed at the address [http://localhost:3000](http://localhost:3000).

### Table component:

> Provide an object with columns and their respective parameters
>
> > - name: Name the column
> > - mapping: data key reference
> > - sort: active ordering by this column or not
> > <pre>
> >  import BtnDelete from "../../../components/buttons/BtnDelete"
> >
> > {
> > actions: [BtnDelete],
> > columns: [
> >
> > > > {
> > > > name: 'Name',
> > > > mapping: 'name',
> > > > sort: true
> > > > },
> > > > {
> > > > name: 'Login',
> > > > mapping: 'login',
> > > > sort: true
> > > > },
> > > > {
> > > > name: 'E-mail',
> > > > mapping: 'email',
> > > > sort: false
> > > > }
> > > > ]
> > > > }
> >
> > </pre>

<pre>   
Declare de method in the parent component, same declared inside child component
Example: BtnDelete
    
const confirmDelete = (id) =>{
    setId(id)
    dialog.current.show({
        title: "Delete User",
        message: "Are you sure you want to delete this user?"
    })        
}
</pre>

#### see the file front/src/views/register.js

#### The database can be populated via app/index.html or Rest Client plugin use rest.http
