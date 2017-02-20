class Project < ApplicationRecord
  has_many :projectizations
  has_many :users, :through => :projectizations
  has_many :tasks, dependent: :destroy
end
