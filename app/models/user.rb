class User < ApplicationRecord
  attr_accessor :remember_token
  before_save { email.downcase! }

  validates :first_name, presence: true, length: { maximum: 50}
  validates :last_name, presence: true, length: { maximum: 50}
  validates :email, presence: true,
            length: { maximum: 255 },
            uniqueness: { case_senitive: false}
  validates :company, presence: true, length: {maximum: 255 }
  validates :password, presence: true, length: {minmum: 6}

  has_secure_password

  class << self

    # Returns the hash of any given string using Bcrpt gem
    def digest(string)
      cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
             BCrypt::Engine.cost
      BCrypt::Password.create(string, cost: cost)
    end

    # Returns a randowmly generated token
    def new_token
      SecureRandom.urlsafe_base64
    end
  end

  def remember
    self.remember_token = User.new_token
    update_attribute(:remember_digest, User.digest(remember_token))
  end

  def authenticated?(remember_token)
    return false if remember_digest.nil?
    BCrypt::Password.new(remember_digest).is_password?(remember_token)
  end

  def forget
    update_attribute(:remember_digest, nil)
  end
end
