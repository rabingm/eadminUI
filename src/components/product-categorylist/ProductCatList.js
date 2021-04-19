import React, {useEffect} from "react";
import { Form, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { fetchCategories } from "../../pages/category/categoryAction";

export const ProductCatList = () => {
  const { categoryList } = useSelector((state) => state.category);

  const dispatch = useDispatch()

  useEffect(() => {
    !categoryList.length && dispatch(fetchCategories())
  }, [categoryList, dispatch])

  const parentCatList = categoryList.filter(row => !row.parentCat);
  const childCatList = categoryList.filter(row => row.parentCat);

  return (
    <div>
      <ListGroup >
        {parentCatList.map((row => (
          <>
          
          <ListGroup.Item key = {row._id}>
              
          <Form.Check type="checkbox" label={row.name} />

          </ListGroup.Item>

          {
              childCatList.map(catItm =>
                row._id === catItm.parentCat && ( 

                    <ListGroup.Item key = {row._id}>
              
                    <Form.Check type="checkbox" label={catItm.name} className= "ml-4" />
          
                    </ListGroup.Item>
                )
                
                )

          }
          
          </>
        )))}

        {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
      </ListGroup>
    </div>
  );
};
