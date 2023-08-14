import React from "react";
import { Grid, TextField } from "@mui/material";

export default function ShoppingItem({ item, setItem }) {
    const NAME = "Item Name";
    const PRICE = "Price";
    const QUATITY = "Quantity";
    const DESCRIPTION = "Description";
    const IMAGE = "Image";


    if (setItem) {
        var setName = (event) => setItem({ ...item, name: event.target.value });
        var setPrice = (event) => setItem({ ...item, price: event.target.value });
        var setQuantity = (event) => setItem({ ...item, quantity: event.target.value })
        var setDescription = (event) => setItem({ ...item, description: event.target.value })
        var setImage = (event) => setItem({ ...item, image: event.target.value })
        var setSellerId = (event) => setItem({ ...item, sellerId: event.target.value})
    }

    return (
        <Grid container spacing={3} marginTop={1}>
            <Grid item xs={12} md={6} lg={4}>
                <TextField
                    disabled={!setItem}
                    fullWidth
                    label={NAME}
                    value={item?.name ?? ""}
                    onChange={setName}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <TextField
                    disabled={!setItem}
                    fullWidth
                    label={PRICE}
                    value={item?.price ?? ""}
                    onChange={setPrice}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <TextField
                    disabled={!setItem}
                    fullWidth
                    label={QUATITY}
                    value={item?.quantity ?? ""}
                    onChange={setQuantity}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <TextField
                    disabled={!setItem}
                    fullWidth
                    label={DESCRIPTION}
                    value={item?.description ?? ""}
                    onChange={setDescription}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <TextField
                    disabled={!setItem}
                    fullWidth
                    label={IMAGE}
                    value={item?.image ?? ""}
                    onChange={setImage}
                />
            </Grid>
        </Grid>
    );
}