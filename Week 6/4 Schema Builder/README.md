# Week 6 Day 4 - Schema Builder 

## Goal

To help students in their understanding of how to structure a relational database.

## Lesson

The is going to best served if you spend the whole time going over this with the students. All the tables below can be copied and pasted into a google sheet for your convenience. The goal of this exercise is to help students go from a table like the one labeled, `unformatted data` into a series of tables that link to each other; and that repeat information as little as possible.

Also included below is a solution to how you could structure the DB. Try and help students come to the realizations on their own as much as you can. Ask questions like, `How many orders can one account have? one or many?` Always pull back to the idea's of many to many, or one to one, or one to many; and how we represent that with more tables. If you find yourself needing to make an infinite number of columns then what you really need is to make a table to account for that.

*Take note that there is 2 Nate's with different emails in the below table that should be considered separate users.*

Key words to use are

- Normalization: The process of taking unformatted data and creating a schema out of it.
- Schema: A representation of how the data will look.
- 1 to 1: One record can link to only one other item
- 1 to many: One record to Link to many items
- many to many: Many record Can Link To many other Records
- Junction Table: hos a many to many relation ship is created (example the line_item table)

rules for naming conventions

- No uppercase column or table names, use _ for spaces, AKA snake case


### Unformatted data
| name    | email                        | order | address          | state | line_item     | price | qty |
| ------- | ---------------------------- | ----- | ---------------- | ----- | ------------- | ----- | --- |
| Nate    | NateAroono@gmail.com         | 1     | 123 N Street Rd  | UT    | AA Batteries  | 5     | 2   |
| Nate    | NateAroono@gmail.com         | 1     | 123 N Street Rd  | UT    | AAA Batteries | 4     | 2   |
| Nate    | NateAroono@gmail.com         | 1     | 123 N Street Rd  | UT    | C Batteries   | 6     | 3   |
| Nate    | NateAroono@gmail.com         | 2     | 321 S Road St    | WA    | AA Batteries  | 5     | 1   |
| Nate    | NateAroono@gmail.com         | 2     | 321 S Road St    | WA    | AAA Batteries | 4     | 1   |
| Nate    | NateAroono@gmail.com         | 2     | 321 S Road St    | WA    | C Batteries   | 6     | 1   |
| Travis  | TravTheMavrick@gmail.com     | 3     | 978 w st         | MO    | C Batteries   | 6     | 3   |
| Travis  | TravTheMavrick@gmail.com     | 3     | 978 w st         | MO    | D Batteries   | 7     | 2   |
| Nate    | NathanielBoneparte@gmail.com | 4     | 456 circle rd    | NY    | Z Batteries   | 40    | 1   |
| Shannon | ShannonIsHere@gmail.com      | 5     | south north blvd | CA    | Z Batteries   | 40    | 2   |
| Nate    | NateAroono@gmail.com         | 6     | 123 N Street Rd  | UT    | AA Batteries  | 5     | 9   |
| Nate    | NateAroono@gmail.com         | 6     | 123 N Street Rd  | UT    | D Batteries   | 7     | 3   |


<hr/>

## Solution

### account table

#### Schema
| column name | type         | constraint  |
| ----------- | ------------ | ----------- |
| id          | serial       | primary key |
| name        | varChar(255) | not null    |
| email       | varChar(255) | not null    |

#### Result
| id  | name    | email                        |
| --- | ------- | ---------------------------- |
| 1   | Nate    | NateAroono@gmail.com         |
| 2   | Travis  | TravTheMavrick@gmail.com     |
| 3   | Nate    | NathanielBonaparte@gmail.com |
| 4   | Shannon | ShannonIsHere@gmail.com      |



### account_order table (cant call this order table, because that is a reserved word in SQL)

#### Schema
| column name | type    | constraint                       |
| ----------- | ------- | -------------------------------- |
| id          | serial  | primary key                      |
| account_id  | integer | not null foreign key account(id) |
| address_id  | integer | not null foreign key address(id) |

#### Result
| id  | name    | email                        |
| --- | ------- | ---------------------------- |
| 1   | Nate    | NateAroono@gmail.com         |
| 2   | Travis  | TravTheMavrick@gmail.com     |
| 3   | Nate    | NathanielBonaparte@gmail.com |
| 4   | Shannon | ShannonIsHere@gmail.com      |


### address table

#### Schema
| column name | type         | constraint                      |
| ----------- | ------------ | ------------------------------- |
| id          | serial       | primary key                     |
| account_id  | varChar(255) | not null references account(id) |
| address     | varChar(255) | not null                        |
| state       | varChar(2)   | not null                        |

#### Result

| id  | account_id | address          | state |
| --- | ---------- | ---------------- | ----- |
| 1   | 1          | 123 N Street Rd  | UT    |
| 2   | 1          | 321 S Road St    | WA    |
| 3   | 2          | 978 w st         | MO    |
| 4   | 3          | 456 circle rd    | NY    |
| 5   | 4          | South North blvd | CA    |


### product table

#### Schema
| column name | type         | constraint  |
| ----------- | ------------ | ----------- |
| id          | serial       | primary key |
| price       | float        | not null    |
| title       | varChar(255) | not null    |

#### Result
| id  | title         | price |
| --- | ------------- | ----- |
| 1   | AAA Batteries | 4     |
| 2   | AA Batteries  | 5     |
| 3   | C Batteries   | 6     |
| 4   | D Batteries   | 7     |
| 5   | Z Batteries   | 40    |


### line_item table

### Schema
| column name | type    | constraint                      |
| ----------- | ------- | ------------------------------- |
| id          | serial  | primary key                     |
| qty         | integer | not null                        |
| product_id  | integer | not null references product(id) |
| order_id    | integer | not null references order(id)   |

#### Result
| id  | order_id | product_id | qty |
| --- | -------- | ---------- | --- |
| 1   | 1        | 1          | 2   |
| 2   | 1        | 2          | 2   |
| 3   | 1        | 3          | 2   |
| 4   | 2        | 1          | 1   |
| 5   | 2        | 2          | 1   |
| 6   | 2        | 3          | 1   |
| 7   | 3        | 3          | 3   |
| 8   | 3        | 4          | 2   |
| 9   | 4        | 5          | 1   |
| 19  | 5        | 5          | 2   |