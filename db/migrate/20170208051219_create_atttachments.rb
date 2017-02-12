class CreateAtttachments < ActiveRecord::Migration[5.0]
  def change
    create_table :atttachments do |t|
      t.integer :project_id
      t.integer :issue_id
      t.integer :task_id
      t.text :description
      t.string :attachment_name
      t.text :attachment_url

      t.timestamps
    end
  end
end
