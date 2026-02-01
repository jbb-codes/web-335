"""
Author: Jarren Bess
Date: Jan 31, 2026
File Name: Bess_lemonadeStand.py
Description: This file calculates the cost and profit for a lemonade stand
"""

def calculate_cost(lemons_cost, sugar_cost):
    return lemons_cost + sugar_cost

def calculate_profit(lemons_cost, sugar_cost, selling_price):
    return selling_price - calculate_cost(lemons_cost, sugar_cost)

# Variables item prices
lemons_price = 5
sugar_price = 3
lemonade_price = 2

# Variables to hold values of functions
total_cost = calculate_cost(lemons_price, sugar_price)
total_profit = calculate_profit(lemons_price, sugar_price, lemonade_price)

# Variable for string output
output = f"lemons_price: {lemons_price}\nsugar_price: {sugar_price}\nlemonade_price: {lemonade_price}\nTotal cost: {total_cost}\nTotal profit: {total_profit}"

print(output)
