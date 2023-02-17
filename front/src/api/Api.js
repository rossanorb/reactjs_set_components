import axios from 'axios';
const endpoint = 'register';


const Api = {
    async List(queryString) {

        return await axios.get(`http://localhost:4000/${endpoint}?${queryString}`)
            .then((response) => {
                return {
                    status: true,
                    data: response.data.body,
                    paginate: {
                        current_page: response.data.current_page,
                        last_page: response.data.last_page
                    }
                };
            })
            .catch(err => {
                return {
                    status: false,
                    error: err.message,
                    description: err.response.data.message
                };
            });

    },

    async delete(id) {
        return await axios.delete(`http://localhost:4000/${endpoint}/${id}`)
            .then((response) => {
                return {
                    status: true,
                    data: response.data.body,
                };
            })
            .catch(err => {
                return {
                    status: false,
                    error: err.message,
                    description: err.response.data.message
                };
            });
    }
}

export default Api;