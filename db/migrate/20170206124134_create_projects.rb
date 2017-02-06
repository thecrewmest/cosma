class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :description
      t.string :image_url
      t.integer :progress
      t.boolean :is_archived
      t.datetime :date_archived

      t.timestamps
    end
  end
end
