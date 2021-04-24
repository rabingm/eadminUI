import React, { useEffect } from "react";
import { Form, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { fetchCategories } from "../../pages/category/categoryAction";

export const ProductCatList = ({onCatSelect, selectedCatIds}) => {
  const { categoryList } = useSelector((state) => state.category);

  const dispatch = useDispatch();

  useEffect(() => {
    !categoryList.length && dispatch(fetchCategories());
  }, [categoryList, dispatch]);

  const parentCatList = categoryList.filter((row) => !row.parentCat);
  const childCatList = categoryList.filter((row) => row.parentCat);

console.log(selectedCatIds)

  return (
    <div>
      <ListGroup>
        {parentCatList.map((row) => (
          <>
            <ListGroup.Item key={row._id}>
              <Form.Check
                type="checkbox"
                label={row.name}
                onChange={onCatSelect}
                defaultValue={row._id}
                checked={selectedCatIds?.includes(row._id)}
              />
            </ListGroup.Item>

            {childCatList.map(
              (catItm) =>
                row._id === catItm.parentCat && (
                  <ListGroup.Item key={catItm._id}>
                    <Form.Check
                      type="checkbox"
                      label={catItm.name}
                      onChange={onCatSelect}
                      defaultValue={catItm._id}
                      checked={selectedCatIds?.includes(catItm._id)}
                      className="ml-4"
                    />
                  </ListGroup.Item>
                )
            )}
          </>
        ))}

        {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
      </ListGroup>
    </div>
  );
};
