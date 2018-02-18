UPDATE bins
SET name = null, 
    price = null 
WHERE shelf = $1 and number = $2