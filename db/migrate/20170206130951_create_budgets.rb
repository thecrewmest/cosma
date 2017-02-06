class CreateBudgets < ActiveRecord::Migration[5.0]
  def change
    create_table :budgets do |t|
      t.integer :amount
      t.integer :extra_cost

      t.timestamps
    end
  end
end
