class Task < ApplicationRecord
  has_many :workmanships
  has_many :users, :through => :workmanships
  belongs_to :project
end
