class CreatePrivileges < ActiveRecord::Migration[5.0]
  def change
    create_table :privileges do |t|
      t.integer :user_id
      t.boolean :create_right
      t.boolean :read_right
      t.boolean :update_right
      t.boolean :delete_right

      t.timestamps
    end
  end
end
