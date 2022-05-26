import React from 'react';
import { toast } from 'react-toastify';
import swal from 'sweetalert';

const ProductRow = ({product, index, refetch}) => {

    const handleDeleteProduct = id => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {

                fetch(`https://desolate-beach-97825.herokuapp.com/product/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}` 
                }
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount) {
                        toast.success(`Product: ${product?.name} is Successfully Deleted`);
                        refetch();
                    }
                    else {
                        toast.error('something went wrong, please try again');
                        refetch();
                    }
                })
            }
          });

    }

    return (
        <tr>
            <th>{index + 1}</th>
            <th>{product?._id}</th>
            <td>{product?.name}</td>
            <td>{product?.available_quantity}</td>
            <td><button onClick={() => handleDeleteProduct(product?._id)} className='btn btn-xs'>Remove Product</button></td>
        </tr>
    );
};

export default ProductRow;