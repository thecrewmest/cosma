class CreateAttachments < ActiveRecord::Migration[5.0]
  def change
    create_table :attachments do |t|
      t.string :description
      t.string :attachment_name
      t.string :attachment_url

      t.timestamps
    end
  end
end
