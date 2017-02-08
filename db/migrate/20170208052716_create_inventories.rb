class CreateInventories < ActiveRecord::Migration[5.0]
  def change
    create_table :inventories do |t|
      t.integer :user_id
      t.integer :project_id
      t.text :stock_title
      t.integer :quantity

      t.timestamps
    end
  end
end
