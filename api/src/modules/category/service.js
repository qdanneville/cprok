import CategoryQueries from "./query"

const CategoryServices = {
    getAll: (req, callback) => {
        CategoryQueries.getAll(req,
            response => {
                return callback({ success: true, message: 'Categories successfuly retrieved', data: response });
            },
            error => {
                return callback({ success: false, message: error });
            });
    }
}

export default CategoryServices;