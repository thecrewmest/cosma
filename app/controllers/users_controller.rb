class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.role = 'owner'
    if @user.save
      # Redirect to Dashboard
      log_in @user
      flash[:success] = "Welcome to BIDII"
      redirect_to dashboard_url(@user)
    else
      render 'new'
    end
  end

  private
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :company, :password)
    end
end
