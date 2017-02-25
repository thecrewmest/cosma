class CreateProjectizations < ActiveRecord::Migration[5.0]
  def change
    create_table :projectizations do |t|
      t.integer :project_id
      t.integer :user_id

      t.timestamps
    end
  end
end
