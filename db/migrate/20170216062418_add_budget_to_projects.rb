class AddBudgetToProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :budget, :decimal
  end
end
