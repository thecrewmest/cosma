class AddBudgetAndCostToTask < ActiveRecord::Migration[5.0]
  def change
    add_column :tasks, :budget, :decimal
    add_column :tasks, :cost, :decimal
  end
end
