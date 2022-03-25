import ItemCount from "../item-count/ItemCount";
import "./ItemDetail.css"


function ItemDetail({product}) {

    const onAdd = (counter) => {
        if(product.stock >= counter){
            console.log(counter);
        }
    };
    return (
        <div className="row align-items-start">
            <div className="col-12 mt-2">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img className="card-img-top image-detail-315 m-2" src={product.imgSrc}
                                 alt={product.name}/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-center"><b>{product.name}</b></h5>
                                <p className="card-text text-center">${product.price}</p>
                                <p className="card-text text-center">{product.description}</p>
                                <ItemCount stock = {product.stock} onAdd = { onAdd} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
