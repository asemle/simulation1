UPDATE bins
SET name = $3, 
    price = $4 
WHERE shelf = $1 and number = $2