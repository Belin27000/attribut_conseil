-WITH RealOrder AS (
    SELECT *
    FROM orders
    WHERE order_status <> 'canceled'
),
NbOrder AS (
    SELECT customer_id,
        COUNT (order_id) AS order_count
    FROM RealOrder
    GROUP BY customer_id
)
SELECT *
FROM NbOrder
ORDER BY order_count DESC;