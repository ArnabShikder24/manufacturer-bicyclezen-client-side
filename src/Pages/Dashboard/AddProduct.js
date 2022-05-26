import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [process, setProcess] = useState(false);
    
    const imgStorageKey = '422ec5c3c55190a4ad168112547773c1';

    const onSubmit = async data => {
        setProcess(true);
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success) {
                const img = result.data.url;
                const product = {
                    img: img,
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    min_order: data.min_order,
                    available_quantity: data.available_quantity
                }
                // send database
                fetch('https://desolate-beach-97825.herokuapp.com/product', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(inserted => {
                    if(inserted.insertedId) {
                        toast.success('Product Added Successfully')
                        reset()
                    }
                    else {
                        toast.error('Failed, Please try again')
                    }
                    setProcess(false);
                })
            }
        })
    }


    return (
        <div>
            <h1 className='text-2xl mb-3'>Add Product</h1>
            <div className='flex justify-center items-center my-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Add Product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Product Name</span>
                </label>
                <input
                    type="text"
                    placeholder="Product Name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("name", {
                        required: {
                            value: true,
                            message: 'Product Name is Required'
                        }
                    })}
                />
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                </label>
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input
                    type="number"
                    placeholder="Price"
                    className="input input-bordered w-full max-w-xs"
                    {...register("price", {
                        required: {
                            value: true,
                            message: 'price is Required'
                        }
                    })}
                />
                <label className="label">
                    {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                </label>
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Minimum Order</span>
                </label>
                <input
                    type="number"
                    placeholder="Minimum Order"
                    className="input input-bordered w-full max-w-xs"
                    {...register("min_order", {
                        required: {
                            value: true,
                            message: 'Minimum Order is Required'
                        }
                    })}
                />
                <label className="label">
                    {errors.min_order?.type === 'required' && <span className="label-text-alt text-red-500">{errors.min_order.message}</span>}
                </label>
            </div>
            
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Available Quantity</span>
                </label>
                <input
                    type="number"
                    placeholder="Available Quantity"
                    className="input input-bordered w-full max-w-xs"
                    {...register("available_quantity", {
                        required: {
                            value: true,
                            message: 'Available Quantity is Required'
                        }
                    })}
                />
                <label className="label">
                    {errors.available_quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available_quantity.message}</span>}
                </label>
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Description</span>
                </label>
                <textarea
                    type="text"
                    placeholder="Description"
                    className="input input-bordered w-full max-w-xs"
                    {...register("description", {
                        required: {
                            value: true,
                            message: 'Description is Required'
                        }
                    })}
                />
                <label className="label">
                    {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                </label>
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Product Image</span>
                </label>
                <input
                    type="file"
                    className="input input-bordered pt-[6px] w-full max-w-xs"
                    {...register("img", {
                        required: {
                            value: true,
                            message: 'Image is Required'
                        }
                    })}
                />
                <label className="label">
                    {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                </label>
            </div>
                <p className='my-1'>{process && 'Loading...'}</p>
            <input className='btn w-full max-w-xs text-white' type="submit" value="ADD" />
            </form>
            </div>
            </div>
            </div>
        </div>
    );
};

export default AddProduct;