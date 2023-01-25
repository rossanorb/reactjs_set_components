# Set of ReactJs components

## Requirements
- Mongodb
- Node.Js version 16

## Mongodb running as individual container

```bash
$ sudo docker run -d --name mongodb -p 27017:27017 -v /YOUR_LOCAL_FOLDER_HERE:/data/db mongo:3.6
```

## Running api server.

>In the root folder api run the command below:
>> ```bash
>> $ npm run start
>> ```

## Running front-end application.

>In the root folder front run the command below:
>> ```bash
>> $ npm run start
>> ```


## The application can be accessed at the address [http://localhost:3000](http://localhost:3000).



### Table component:
> Provide an object with columns and their respective parameters
>>- name: Name the column
>>- mapping: data key reference
>>- sort: active ordering by this column or not
>><pre>
>>  {
>>        columns: [
>>            {
>>                name: 'Name',
>>                mapping: 'name',
>>                sort: true
>>            },
>>            {
>>                name: 'Login',
>>                mapping: 'login',
>>                sort: true
>>            },
>>            {
>>               name: 'E-mail',
>>               mapping: 'email',
>>               sort: false
>>            }
>>        ]
>>  }
>><pre>

#### front/src/views/register.js